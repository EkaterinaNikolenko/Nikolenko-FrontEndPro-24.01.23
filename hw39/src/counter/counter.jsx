function counter(name) {
    return () => {
        let span = document.querySelector('#' + name);
        let spanValue = +span.innerText;
        span.innerText = (spanValue + 1).toString();
    }
}

export default counter;