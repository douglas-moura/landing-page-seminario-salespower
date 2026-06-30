import './index.css'

import { toggleMenu } from './assets/functions/toggleMenu'
import { iniciarContagemRegressiva } from './assets/functions/contagemRegressiva'

const dataFinal = new Date(2026, 8, 16, 7, 59, 59)
iniciarContagemRegressiva(dataFinal)