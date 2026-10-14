//1.create this variable to hold all the share buttons
const ShareButtons = document.querySelectorAll ('.tile-share')

//3. do console log to check if the javascript is working
console.log(ShareButtons)

//4. create a function to copy the link to the clipboard
async function copyText(e) {
//prevent button from going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert('Copied the text: ' + link)
        console.log('Link copied to clipboard!')
    } catch (err) {
        console.error('Failed to copy: ', err)
    }
}

//2. copy the link to the clipboard
    ShareButtons.forEach(ShareButton => 
        ShareButton.addEventListener('click', copyText))

const ShareBtns = document.querySelectorAll ('.share-button')

//3. do console log to check if the javascript is working
console.log(ShareBtns)

//4. create a function to copy the link to the clipboard
async function copyText(e) {
//prevent button from going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert('Copied the text: ' + link)
        console.log('Link copied to clipboard!')
    } catch (err) {
        console.error('Failed to copy: ', err)
    }
}

//2. copy the link to the clipboard
    ShareBtns.forEach(ShareBtn => 
        ShareBtn.addEventListener('click', copyText))
