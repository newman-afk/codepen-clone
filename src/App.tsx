import { useEffect } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { html } from '@codemirror/lang-html'
import { useState } from 'react'
import { sass } from '@codemirror/lang-sass'
import CodeMirrorWrapper from './CodeMirrorWrapper'

function App() {
  const [htmlContent, setHtmlContent] = useState('<h1>CodeMirror</h1>')
  const [javascriptContent, setJavaScriptContent] = useState(
    `document.body.style.backgroundColor = 'skyblue'`
  )
  const [stylesContent, setStylesContent] = useState(`h1{color:white}`)

  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
    <html>
      <style>${stylesContent}</style>
      <body>${htmlContent}</body>
      <script>${javascriptContent}</script>
    </html>
  `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [htmlContent, stylesContent, javascriptContent])

  // const srcDoc = `
  //   <html>
  //     <style>${stylesContent}</style>
  //     <body>${htmlContent}</body>
  //     <script>${javascriptContent}</script>
  //   </html>
  // `
  // const deferredSrcDoc = useDeferredValue(srcDoc)
  return (
    <>
      <div className="flex h-[100vh]  flex-col overflow-hidden">
        <div className="flex flex-1 bg-zinc-600">
          <CodeMirrorWrapper
            title="HTML"
            className="flex flex-1 flex-col p-1 pb-0"
          >
            <CodeMirror
              className=" flex-1 overflow-hidden"
              value={htmlContent}
              height="100%"
              width="100%"
              extensions={[html()]}
              onChange={(value) => setHtmlContent(value)}
              theme={'dark'}
            />
          </CodeMirrorWrapper>
          <CodeMirrorWrapper
            title="Sass"
            className="flex flex-1 flex-col p-1 pb-0"
          >
            <CodeMirror
              className="flex-1 overflow-hidden"
              value={stylesContent}
              height="100%"
              width="100%"
              extensions={[sass()]}
              onChange={(value) => setStylesContent(value)}
              theme={'dark'}
            />
          </CodeMirrorWrapper>
          <CodeMirrorWrapper
            title="JS"
            className="flex flex-1 flex-col p-1 pb-0"
          >
            <CodeMirror
              className="flex-1 overflow-hidden"
              value={javascriptContent}
              height="100%"
              width="100%"
              extensions={[javascript({ jsx: true })]}
              onChange={(value) => setJavaScriptContent(value)}
              theme={'dark'}
            />
          </CodeMirrorWrapper>
        </div>

        <iframe
          className="flex-1"
          sandbox="allow-scripts"
          srcDoc={srcDoc}
        ></iframe>
      </div>
    </>
  )
}
export default App
