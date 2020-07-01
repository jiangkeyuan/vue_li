export const getElement = (id)=>{
    return document.getElementById(id)
}
export const innerWidths = (window)=>{
    return window.innerWidth
}
const useWidth = (window,id)=>{
    return innerWidths(window) * getElement(id).children.length;
}
export default useWidth;