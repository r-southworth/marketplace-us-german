import type { Component } from "solid-js";
import { createSignal, createEffect } from "solid-js";
import { DeletePostButton } from "../posts/DeletePostButton";
import supabase from "../../lib/supabaseClient";
import { getLangFromUrl, useTranslations } from "../../i18n/utils";
import { SocialMediaShares } from "../posts/SocialMediaShares";
import SocialModal from "../posts/SocialModal";

const lang = getLangFromUrl(new URL(window.location.href));
const t = useTranslations(lang);

interface Post {
  content: string;
  id: number;
  subject2: string;
  title: string;
  seller_name: string;
  major_municipality: string;
  // minor_municipality: string;
  // governing_district: string;
  user_id: string;
  image_urls: string | null;
}

interface Props {
  // Define the type for the filterPosts prop
  posts: Array<Post>;
}

export const ViewCard: Component<Props> = (props) => {
  const [newPosts, setNewPosts] = createSignal<Array<any>>([]);

  createEffect(async () => {
    if (props.posts) {
      const updatedPosts = await Promise.all(
        props.posts.map(async (post: any) => {
          post.image_urls
            ? (post.image_url = await downloadImage(
              post.image_urls.split(",")[0],
            ))
            : (post.image_url = null);
          return post;
        }),
      );

      setNewPosts(updatedPosts);
    }
  });

  const downloadImage = async (path: string) => {
    try {
      const { data, error } = await supabase.storage
        .from("post.image")
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      return url;
    } catch (error) {
      if (error instanceof Error) {
        console.log("Error downloading image: ", error.message);
      }
    }
  };

  return (
    <div class="flex justify-center w-full">
      <ul class="md:flex md:flex-wrap md:justify-center md:w-full">
        {newPosts().map((post: any) => (
          <li class=" w-[99%]">
            <a href={`/${lang}/posts/${post.id}`}>
              <div class="box-content flex flex-col justify-center items-center mb-2 w-full rounded-lg border border-opacity-25 shadow-md md:flex-row md:justify-start md:items-start md:h-48 dark:border-opacity-25 shadow-shadow-LM border-border1 dark:shadow-shadow-DM dark:border-border1-DM">
                <div class="flex justify-center items-center w-full h-80 rounded-lg md:mr-2 md:w-48 md:h-48 bg-background1 dark:bg-background1-DM">
                  {post.image_url ? (
                    <img
                      src={post.image_url}
                      alt={
                        post.image_urls.split(",")[0]
                          ? "User Image"
                          : "No image"
                      }
                      class="object-cover w-full h-full rounded-lg bg-background1 dark:bg-icon1-DM"
                    />
                  ) : (
                    <svg
                      viewBox="0 0 512 512"
                      version="1.1"
                      class="object-cover w-full h-full rounded-lg fill-logo dark:bg-icon1-DM"
                    >
                      <g id="Page-1" stroke="none" stroke-width="1">
                        <g
                          id="icon"
                          transform="translate(64.000000, 64.000000)"
                        >
                          <path
                            d="M384,1.42108547e-14 L384,384 L1.42108547e-14,384 L1.42108547e-14,1.42108547e-14 L384,1.42108547e-14 Z M109.226667,142.933333 L42.666,249.881 L42.666,341.333 L341.333,341.333 L341.333,264.746 L277.333333,200.746667 L211.84,266.24 L109.226667,142.933333 Z M245.333333,85.3333333 C227.660221,85.3333333 213.333333,99.6602213 213.333333,117.333333 C213.333333,135.006445 227.660221,149.333333 245.333333,149.333333 C263.006445,149.333333 277.333333,135.006445 277.333333,117.333333 C277.333333,99.6602213 263.006445,85.3333333 245.333333,85.3333333 Z"
                            id="Combined-Shape"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  )}
                </div>

                <div
                  id="cardContent"
                  class="flex justify-between px-1 pt-1 w-full text-left md:w-5/6 md:h-full"
                >
                  <div class="w-full">
                    <div class="grid grid-cols-4">
                      <div class="flex relative col-span-3 w-full align-top">
                        <div class="w-full">
                          <div class="truncate inline-block max-w-[58%]  md:mt-2 text-ptext2 dark:text-ptext2-DM text-sm md:text-base bg-background2 dark:bg-background2-DM  opacity-[85%] dark:opacity-100 w-fit rounded-lg px-2">
                            {/*post.major_municipality}/{post.minor_municipality*/}
                            {/*post.governing_district*/}
                          </div>
                          <div class="truncate inline-block max-w-[28%]  md:mt-2 text-ptext2 dark:text-ptext2-DM text-sm md:text-base bg-background2 dark:bg-background2-DM  opacity-[85%] dark:opacity-100 w-fit rounded-lg px-2 ml-1">
                            {post.category}
                          </div>
                        </div>
                      </div>
                      <div class="flex relative col-span-1 justify-end w-full align-top">
                        <div class="inline-block">
                          <DeletePostButton
                            id={post.id}
                            userId={post.user_id}
                            postImage={post.image_urls}
                          />
                        </div>
                        <div class="inline-block">
                          <SocialModal
                            id={Number(post.id)}
                            title={post.title}
                            image_urls={post.image_urls}
                          />
                        </div>
                      </div>

                      <p class="overflow-hidden col-span-4 pr-4 max-h-14 text-2xl font-bold text-ptext1 truncate dark:text-ptext1-DM">
                        {post.title}
                      </p>
                    </div>

                    <p class="overflow-hidden mb-1 text-base text-ptext1 dark:text-ptext1-DM">
                      <span class="font-bold">{t("postLabels.provider")}</span>
                      {post.seller_name}
                    </p>

                    <p
                      class="overflow-hidden pt-0.5 mr-4 mb-2 text-sm text-ptext1 max-h-[60px] line-clamp-3 prose dark:text-ptext1-DM dark:prose-invert"
                      innerHTML={post.content}
                    ></p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
