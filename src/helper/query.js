const query = {
    quickNavButtons: () =>  document.querySelectorAll('.quick'),
    sections: () =>  document.querySelectorAll('section'),
    // navbar
    navbar: () => document.querySelector('.navbar'),
    // home
    home: () => document.querySelector('.home'),
    // hero section used query
    heroBtns: () => document.querySelectorAll('.hero__cont__buttons span'),
    hero: () => document.querySelector('.hero'),
    statusBtn: () => document.querySelector('.btn-status'),
    contactBtn: () => document.querySelector('.hero__cont__buttons span:nth-of-type(3)'),
    heroImg: () => document.querySelector('.hero__cont__img img'),
    heroImgCont: () => document.querySelector('.hero__cont__img'),
    heroStatus: () => document.querySelector('.hero__cont__img .status'),
    heroH2: () => document.querySelector('.hero__cont__body h2'),
    heroInfoOne: () => document.querySelector('.hero__cont__info span:nth-of-type(1)'),
    heroInfoTwo: () => document.querySelector('.hero__cont__info span:nth-of-type(2)'),
    heroArrow: () => document.querySelector('.hero__arrow'),
    // skill section used query
    skill: () => document.querySelector('.skill'),
    skillHolder: () => document.querySelectorAll('.skill-holder button'),
    skillSvgCircLines: () => document.querySelector('.skill__cont__body__title-svg svg:nth-of-type(2)'),
    // project section used query
    project: () => document.querySelector('.project'),
    projectHolder: () =>  document.querySelectorAll('.project-holder__items'),
    // footer section used query
    footer: () => document.querySelector('.footer'),
    footerArrow: () => document.querySelector('.footer__cont-arrow'),
    // blog
    blogContent: () => document.querySelector('.content__cont'),
    blogPostHolder: () => document.querySelectorAll('.content__cont .post'),
    blogPostCircles: () => document.querySelector('.content__cont-circles'),
    blogPostArrow: () => document.querySelector('.content__cont-arrow'),
    blogPostUpToDate: () => document.querySelector('.up-to-date'),
    //modal email
    modalEmail: () => document.querySelector('.modal-email'),
    modalEmailFormContainer: () => document.querySelector('.form-container')
}

export default query;