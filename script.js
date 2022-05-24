const accountSection = document.getElementsByClassName('account_section')[0];
const accountSectionActive = document.getElementsByClassName('share_section.hidden')[0];
const arrowShareIcon = document.getElementById('share_icon');

document.querySelectorAll('.share_section').forEach((share)=> {
    share.addEventListener('click', () => {
        const shareSectionIcon = share;

        if (accountSectionActive.style.display.includes('none')){
            shareSectionIcon.style.backgroundColor = ' var(--desaturatedDarkBlue)'
            arrowShareIcon.style.color = 'var(--lightGrayishBlue)'
            accountSection.style.display = 'flex';
            accountSectionActive.style.display = 'block';
        } else {
            shareSectionIcon.style.backgroundColor = ''
            arrowShareIcon.style.color = '';
            accountSection.style.display = 'flex';
            accountSectionActive.style.display = 'none'


        }
    })
})