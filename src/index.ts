import './index.css'

import { toggleMenu } from './assets/functions/toggleMenu'
import { iniciarContagemRegressiva } from './assets/functions/contagemRegressiva'

const dataFinal = new Date(2026, 8, 16, 7, 59, 59)
iniciarContagemRegressiva(dataFinal)

const abrirMenu = document.getElementById('icone-abrir-menu') as HTMLElement
abrirMenu?.addEventListener('click', (): void => { toggleMenu() })

const fecharMenu = document.getElementById('icone-fechar-menu') as HTMLElement
fecharMenu?.addEventListener('click', (): void => { toggleMenu() })

const navMenuMobile = document.getElementById('link-mobile') as HTMLElement
navMenuMobile?.addEventListener('click', (): void => { toggleMenu() })