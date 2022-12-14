import React from "react"
import ReactDOM from "react-dom/client"
import reportWebVitals from "./reportWebVitals"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from "store"
import { Testing } from "testing"
import { App } from "App"
import "styles/index.scss"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Testing/>
    </BrowserRouter>
  </Provider>
)

reportWebVitals()
