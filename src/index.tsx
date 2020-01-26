import React from 'react'
import { render } from 'react-dom'
import { App } from './app/components/App/App'
import { checkDevicePixelRatio } from './app/util/checkDevicePixelRatio'
import * as serviceWorker from './serviceWorker'

checkDevicePixelRatio()

render(<App />, document.getElementById('root'))

serviceWorker.register()
