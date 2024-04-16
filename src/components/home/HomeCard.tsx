import type { Component } from "solid-js";
import { createSignal, createEffect, Show } from "solid-js";
import supabase from "../../lib/supabaseClient";
import { ui } from '../../i18n/ui'
import type { uiObject } from '../../i18n/uiType';
import { getLangFromUrl, useTranslations } from '../../i18n/utils';

const lang = getLangFromUrl(new URL(window.location.href));
const t = useTranslations(lang);

// const values = ui[lang] as uiObject
const values = ui[lang] as unknown as uiObject
const productCategories = values.productCategoryInfo.categories

interface Post {
    content: string;
    id: number;
    subject: string;
    title: string;
    seller_name: string;
    seller_img: string;
    major_municipality: string;
    // minor_municipality: string;
    // governing_district: string;
    user_id: string;
    image_urls: string | null;
    price: number;
    price_id: string;
    quantity: number;
    product_id: string;
  }

  interface Props {
    // Define the type for the filterPosts prop
    posts: Array<Post>;
  }

export const HomeCard: Component<Props> = (props) => {
    const [newPosts, setNewPosts] = createSignal<Array<any>>([]);
    const [postImages, setPostImages] = createSignal<string[]>([]);

    createEffect(async () => {
        if (props.posts) {
          const updatedPosts = await Promise.all(
            props.posts.map(async (post: any) => {
              post.image_urls
                ? (post.image_url = await downloadImage(
                    post.image_urls.split(",")[0]
                  ))
                : (post.image_url = null);
              // Set the default quantity to 1
              post.quantity = 1;
              return post;
            })
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

    

    const downloadImages = async (image_Urls: string) => {
        try {
            const imageUrls = image_Urls.split(',');
            imageUrls.forEach(async (imageUrl: string) => {
                const { data, error } = await supabase.storage
                    .from("post.image")
                    .download(imageUrl);
                if (error) {
                    throw error;
                }
                const url = URL.createObjectURL(data);
                setPostImages([...postImages(), url]);
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div class="border-2 border-red-300 mb-4 flex justify-center">
            <ul class="flex">
                { newPosts().map((post:any) => (
                    <li>
                        {/* { post.id } */}
                        {`/${lang}/posts/${post.id}`}
                        <a href={`/${lang}/posts/${post.id}`} class="text-red-500 px-3">Test
                            <div class="border-2 border-border1 dark:border-border1-DM rounded mx-1 p-1 w-48">
                                <div id="homeCard-img" class="flex justify-center items-center">
                                    { post.image_url ? (
                                        <img
                                            src={ post.image_url }
                                            alt={
                                                post.image_urls.split(",")[0]
                                                ? "User Image"
                                                : "No Image"
                                            }
                                        />
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="200px" height="200px" viewBox="35 0 186 256" id="Flat" class="fill-icon1 dark:fill-icon1-DM">
                                            <path d="M208,36H48A12.01312,12.01312,0,0,0,36,48V208a12.01312,12.01312,0,0,0,12,12H208a12.01312,12.01312,0,0,0,12-12V48A12.01312,12.01312,0,0,0,208,36Zm4,172a4.004,4.004,0,0,1-4,4H48a4.004,4.004,0,0,1-4-4V177.65631l33.17187-33.171a4.00208,4.00208,0,0,1,5.65723,0l20.68652,20.68652a12.011,12.011,0,0,0,16.96973,0l44.68652-44.68652a4.00208,4.00208,0,0,1,5.65723,0L212,161.65625Zm0-57.65625L176.48535,114.8291a11.99916,11.99916,0,0,0-16.96973,0L114.8291,159.51562a4.00681,4.00681,0,0,1-5.65723,0L88.48535,138.8291a12.01009,12.01009,0,0,0-16.96973,0L44,166.34393V48a4.004,4.004,0,0,1,4-4H208a4.004,4.004,0,0,1,4,4ZM108.001,92v.00195a8.001,8.001,0,1,1,0-.00195Z"/>
                                        </svg>
                                    )}
                                </div>

                                <div id="homeCard-text">
                                    <div>
                                        <p class="font-bold text-xs text-start line-clamp-2">{ post.title }</p>
                                    </div>

                                    <a href={ `/${ lang }/provider/${ post.user_id }` }><div class="flex items-center my-1">
                                        { post.seller_img ? (
                                            <img
                                                src={ post.seller_img }
                                            />
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 32 32" class="fill-icon1 dark:fill-icon1-DM rounded-full border border-border1 dark:border-border1-DM">
                                                <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"/>
                                            </svg>
                                        )}
                                        <img />
                                        <p class="text-xs font-light ml-1">{ post.seller_name }</p>
                                    </div></a>
                                </div>

                                <div id="homeCard-ratings-price" class="flex items-end">
                                    <div class="w-2/3 border-2 border-red-400 flex items-end">
                                        <div class="flex items-end justify-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 32 32" class="fill-icon1 dark:fill-icon1-DM">
                                                <path d="M 30.335938 12.546875 L 20.164063 11.472656 L 16 2.132813 L 11.835938 11.472656 L 1.664063 12.546875 L 9.261719 19.394531 L 7.140625 29.398438 L 16 24.289063 L 24.859375 29.398438 L 22.738281 19.394531 Z"/>
                                            </svg>

                                            <p class="font-bold text-xs ml-1">4.9</p>
                                            <p class="font-light text-xs">(30.3K)</p>
                                        </div>
                                    </div>

                                    <div class="border-2 border-green-400 w-1/3 flex items-end justify-end">
                                        <p class="text-xs font-bold">${ post.price }</p>
                                    </div>
                                </div>
                            
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )

}