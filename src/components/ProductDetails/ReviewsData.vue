<script lang="ts">
import { ref, computed } from 'vue'

export interface Review {
  id: number
  author: string
  rating: number
  date: string
  content: string
}

export const reviews = ref<Review[]>([
  {
    id: 1,
    author: 'Samantha D.',
    rating: 4.5,
    date: 'Posted on August 14, 2023',
    content:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
  },
  {
    id: 2,
    author: 'Alex M.',
    rating: 4,
    date: 'Posted on August 15, 2023',
    content:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
  },
  {
    id: 3,
    author: 'Ethan R.',
    rating: 3.5,
    date: 'Posted on August 16, 2023',
    content:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."
  },
  {
    id: 4,
    author: 'Olivia P.',
    rating: 5,
    date: 'Posted on August 17, 2023',
    content:
      "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."
  },
  {
    id: 5,
    author: 'Liam K.',
    rating: 4,
    date: 'Posted on August 18, 2023',
    content:
      "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."
  },
  {
    id: 6,
    author: 'Ava H.',
    rating: 4.5,
    date: 'Posted on August 19, 2023',
    content:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
  },
  {
    id: 7,
    author: 'Mia W.',
    rating: 4,
    date: 'Posted on August 20, 2023',
    content:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
  },
  {
    id: 8,
    author: 'Ahmed H.',
    rating: 3.5,
    date: 'Posted on September 25, 2024',
    content:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."
  }
])

export const totalReviews = computed(() => reviews.value.length)

export const sortedReviews = computed(() => {
  return [...reviews.value].sort((a, b) => {
    if (sortOption.value === 'latest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    } else if (sortOption.value === 'highest') {
      return b.rating - a.rating
    } else {
      return a.rating - b.rating
    }
  })
})

export const sortOption = ref('latest')

export const useReviewsData = () => {
  return {
    totalReviews,
    reviews,
    sortedReviews,
    sortOption
  }
}
</script>
