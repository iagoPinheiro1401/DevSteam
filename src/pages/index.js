import Head from 'next/head'
import { useState } from 'react'

import Navbar from '@/components/navbar/Navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard from '@/components/cards/saleCard/saleCard'
import styles from "@/styles/index.module.css"
import GameCard from '@/components/cards/gameCard/gameCard'

export default function Home() {
  const [cart, setCart] = useState([])

  const addProduct = (info) => {
    setCart([...cart, info])
  }

  const removeProduct = (pos) => {
    setCart(cart.filter((obj, posObj) => posObj !== pos))
  }

  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar cart={cart} onRemove={removeProduct}/>
        <Container>
          <div className={styles.session}>
            <Subtitle>Promoções</Subtitle>
            <div className={styles.saleContainer}>
              <SaleCard 
                image={"league-of-legends.jpg"}
                discount={"50%"}
                fullPrice={"250,00"}
                discountPrice={"125,00"}
                onAdd={() => {
                  addProduct({name: 'League of Legends', price: 125.00, image: 'league-of-legends.jpg'})
                }}
              />
              <SaleCard 
                image={"valorant.jpg"}
                discount={"50%"}
                fullPrice={"300,00"}
                discountPrice={"150,00"}
                onAdd={() => {
                  addProduct({name: 'Valorant', price: 150.00, image: 'valorant.jpg'})
                }}
              />
              <SaleCard 
                image={"dota-2.jpg"}
                discount={"50%"}
                fullPrice={"400,00"}
                discountPrice={"200,00"}
                onAdd={() => {
                  addProduct({name: 'dota 2', price: 200.9, image: 'dota-2.jpg'})
                }}
              />
            </div>
          </div>
          <div className={styles.session}>
            <Subtitle>Outros jogos</Subtitle>
          </div>
          <div className={styles.gameContainer}>
            <GameCard 
              onAdd={() => {
                    addProduct({name: 'Counter Strike', price: 99.9, image: 'counter-strike.jpg'})
                  }}
            />
          </div>
        </Container>
      </div>
    </>
  )
}
