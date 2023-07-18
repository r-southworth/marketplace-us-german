import { Component, Suspense, createEffect, createResource, createSignal } from 'solid-js'
import { supabase } from '../../lib/supabaseClient'
import type { AuthSession } from '@supabase/supabase-js'
import { productCategoryData } from '../../data'

import travel from '../../assets/categoryIcons/travel.svg'
import worker from '../../assets/categoryIcons/worker.svg'
import palette from '../../assets/categoryIcons/palette.svg'
import paw from '../../assets/categoryIcons/paw.svg'
import legal from '../../assets/categoryIcons/legal.svg'
import garden from '../../assets/categoryIcons/garden.svg'
import engine from '../../assets/categoryIcons/engine-motor.svg'
import doctor from '../../assets/categoryIcons/doctor.svg'
import construction from '../../assets/categoryIcons/construction-tools.svg'
import computer from '../../assets/categoryIcons/computer-and-monitor.svg'
import cleaner from '../../assets/categoryIcons/cleaner-man.svg'
import rightArrow from '../../assets/categoryIcons/circled-right-arrow.svg'
import leftArrow from '../../assets/categoryIcons/circled-left-arrow.svg'
import beauty from '../../assets/categoryIcons/beauty-salon.svg'
import finance from '../../assets/categoryIcons/banking-bank.svg'

async function postFormData(formData: FormData) {
    const response = await fetch("/api/filterPosts", {
        method: "POST",
        body: formData,
    });
    const data = await response.json();

    return data;
}

let categories: Array<any> = []

const { data, error } = await supabase.from('post_category').select('*');

if (error) {
    console.log("supabase error: " + error.message)
} else {
    data.forEach(category => {
        categories.push({ category: category.category, id: category.id })
    })
}

categories.map(
    category => {
        if (category.id === 1) {
            category.icon = garden
        } else if (category.id === 2) {
            category.icon = beauty
        } else if (category.id === 3) {
            category.icon = construction
        } else if (category.id === 4) {
            category.icon = computer
        } else if (category.id === 5) {
            category.icon = engine
        } else if (category.id === 6) {
            category.icon = palette
        } else if (category.id === 7) {
            category.icon = finance
        } else if (category.id === 8) {
            category.icon = cleaner
        } else if (category.id === 9) {
            category.icon = paw
        } else if (category.id === 10) {
            category.icon = legal
        } else if (category.id === 11) {
            category.icon = doctor
        } else if (category.id === 12) {
            category.icon = worker
        } else if (category.id === 13) {
            category.icon = travel
        }
    }
)

const categoriesData = productCategoryData.categories

let allCategoryInfo: any[] = []

for (let i = 0; i < categoriesData.length; i++) {
    allCategoryInfo.push({
        ...categoriesData[i],
        ...(categories.find((itmInner) => itmInner.id.toString() === categoriesData[i].id))
    }
    );
}


export const CategoryCarousel: Component = () => {
    const [category, setCategory] = createSignal<string>('')
    const [formData, setFormData] = createSignal<FormData>()

    function submit(e: SubmitEvent) {
        e.preventDefault()

        if ((e.submitter as HTMLElement).getAttribute("data-value") === null) {
            setCategory('')
        } else {
            setCategory((e.submitter as HTMLElement)!.getAttribute("data-value")!)
        }

        const formData = new FormData(e.target as HTMLFormElement)
        formData.append("category_id", category())

        setFormData(formData)
    }

    return (
        <form onSubmit={submit}>
            <div class="product-carousel border-green-500 border-8 bg-white">
                <div class="bg-gray-400 flex content-center">
                    <button>
                        <img
                            src={leftArrow}
                            alt="Left Arrow"
                        />
                    </button>
                    <ul class="flex content-center border-yellow-500 m-4">
                        {allCategoryInfo?.map((item) => (
                            <button data-value={item.id} class='bg-purple-700' type="submit">

                                <img src={item.icon} alt={item.ariaLabel} title={item.description} />
                                <p class="text-black">{item.name}</p>

                            </button>
                        ))
                        }
                    </ul>
                    <button type="submit">
                        <img
                            src={rightArrow}
                            alt="Right Arrow"
                        />
                    </button>
                </div>
            </div>
        </form>
    )
}
