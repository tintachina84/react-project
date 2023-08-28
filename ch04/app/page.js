"use client";

// import Image from 'next/image'
// import styles from './page.module.css'
import { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import Questions from "@/pages/questions";

const GlobalStyle = createGlobalStyle` 
  body { 
    margin: 0; 
    padding: 0; 
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", 
"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", 
sans-serif; 
    -webkit-font-smoothing: antialiased; 
    -moz-osx-font-smoothing: grayscale; 
  } 
`;

export default function Home() {
  return (
      <>
        <GlobalStyle />
        <Header />
        <Questions />
      </>
  )
}
