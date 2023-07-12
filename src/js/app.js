import 'normalize.css/normalize.css'
import '../sass/style.sass'
import { onDocumentReady, importAll } from './functions.js'
import { modal } from './modal'
import { sliderCharts } from './sliderCharts'
import { sliderAbout } from './sliderAbout'


importAll(
  require.context(
    '../../public',
    true,
    /\.(png|svg|jpg|jpe?g|gif|mov|mp4|ico|webmanifest|xml)$/
  )
)

onDocumentReady(function () {
  console.log('hello.')
})

modal()

sliderCharts()
sliderAbout()