import { createSignal, onMount } from "solid-js";
import { createStore } from "solid-js/store";
import type { Component } from "solid-js";
import type { Post } from "@lib/types";
import { getLangFromUrl, useTranslations } from "@i18n/utils";
import supabase from "@lib/supabaseClient";
import type { AuthSession } from "@supabase/supabase-js";
import type { Client } from "@lib/types";

const lang = getLangFromUrl(new URL(window.location.href));
const t = useTranslations(lang);

interface Props {
    item: Post;
    buttonClick: (event: Event) => void;
}

export const [items, setItems] = createStore<Post[]>([]);
const { data: User, error: UserError } = await supabase.auth.getSession();

export const FreeDownloadButton: Component<Props> = (props: Props) => {
    const [client, setClient] = createSignal<Client>();
    const [session, setSession] = createSignal<AuthSession | null>(null);

    const fetchClient = async (user_id: string) => {
        try {
            const { data, error } = await supabase
                .from("clientview")
                .select("*")
                .eq("user_id", user_id);

            if (error) {
                console.log(error);
            } else if (data[0] === undefined) {
                alert(t("messages.noClient")); //TODO: Change alert message
                location.href = `/${lang}`;
            } else {
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    onMount(async () => {
        setSession(User?.session);
        await fetchClient(User?.session?.user.id!);
        await getPurchasedItems();
    });

    const getPurchasedItems = async () => {
        // console.log("Session Info: ");
        // console.log(session());
        const { data: orders, error } = await supabase
            .from("orders")
            .select("*")
            .eq("customer_id", session()?.user.id);
        if (error) {
            console.log("Orders Error: " + error.code + " " + error.message);
            return;
        }
    };

    async function fetchUrlFromBucket() {
        const response = await fetch("/api/createStripeCheckout", {
            method: "POST",
            body: JSON.stringify({
                items: items,
                userId: User.session?.user.id,
                orderId: orders(),
            }),
        });
        const { clientSecret } = await response.json();
        return clientSecret;
    }
    return (
        <div class="btn-primary relative z-10 w-full">
            <button>{t("buttons.freeDownload")}</button>
        </div>
    );
};
