import './App.css'
import 'antd/dist/antd.css'
import {message} from "antd";
import Search from "antd/es/input/Search";

function App() {

    return (
        <div className="App">
            <div className={`w-10 h-10 bg-red-600`}>

            </div>
            <div>
                <Search style={{width:'500px'}} placeholder="试一下呗" size="large" enterButton="查找" onSearch={async (value) => {
                    console.log(value)
                    let keyword = value.trim();
                    if (keyword) {
                        let prefix = keyword.split(' ')[0]
                        keyword = keyword.substring(prefix.length).trim()
                        if (value.startsWith("gh") || value.startsWith("github")) {
                            if (/^https?:\/\/.*github.*/.test(keyword)) {
                                console.log("这是一个URL:"+`https://ghproxy.com/${keyword}`)
                                window.open(`https://ghproxy.com/${keyword}`, '_blank')
                            } else {
                                window.open(`https://github.com/search?q=${keyword}`, '_blank')
                            }
                        } else if (value.startsWith("bing")) {
                            window.open(`https://cn.bing.com/search?q=${keyword}`, '_blank')
                        } else if (value.startsWith("gg") || value.startsWith("google")) {
                            window.open(`https://www.google.com/search?q=${keyword}`, '_blank')
                        } else if (value.startsWith("baidu")) {
                            window.open(`https://www.baidu.com/s?wd=${keyword}`, '_blank')
                        } else if (value.startsWith("book")) {
                            window.open(`https://zh.b-ok.xyz/s/${keyword}`, '_blank')
                        } else if (value.startsWith("sci")) {
                            window.open(`https://sci-hub.hkvisa.net/${keyword}`, '_blank')
                        }

                    } else {
                        message.config({top: 300})
                        await message.warn("找啥？")
                    }
                }}/>
            </div>
        </div>
    )
}

export default App
