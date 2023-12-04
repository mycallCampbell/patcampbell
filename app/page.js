import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <h1 className={styles.titleMain}>Pat Campbell</h1>
      <Image src={'/pat_and_dad.jpg'} width={3135} height={2125} className={styles.imageHero} alt='image of Pat and Dad' quality={100} />
      <div className={styles.tagLine}>In Loving memory of Pat Campbell</div>
      <div className={styles.iconHeartContainer}>
        <Image src={'/heart.png'} width={512} height={512} className={styles.iconHeart} alt='image of Pat and Dad' quality={100} />
      </div>

    </main>
  )
}
