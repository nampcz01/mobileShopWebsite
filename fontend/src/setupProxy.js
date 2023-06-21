import { createProxyMiddleware } from "http-proxy-middleware";


export default app =>{
    app.use(
        createProxyMiddleware('/api/products',{target: 'http://localhost:9000/api/products'})
    )
}