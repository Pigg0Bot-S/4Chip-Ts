import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import 

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Welcome to 4Chip!<h1>
	
  </div>
  <div id="game"></div>
`


const game_window : HTMLDivElement | null = document.querySelector<HTMLDivElement>('#game')
