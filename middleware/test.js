export default function (context) {
    let {params} = context
    console.log('middleware-params', params)
}