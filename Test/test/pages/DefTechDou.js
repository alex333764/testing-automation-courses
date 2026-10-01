class DefTechDou {
    get BlogTitle() {return $('.title a[href="https://deftech.dou.ua/blogs/?from=fpcol"]')}
    get NewsTitle() {return $('.title a[href="https://deftech.dou.ua/news/"]')}
    get PopularTitle() {return $('.title a[href="https://dou.ua/forums/tags/Defence%20tech/?from=fptopics"]')}
}

export default new DefTechDou()