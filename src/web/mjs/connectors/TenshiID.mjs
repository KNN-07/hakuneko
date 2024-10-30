import WordPressMangastream from './templates/WordPressMangastream.mjs';

export default class TenshiID extends WordPressMangastream {

    constructor() {
        super();
        super.id = 'tenshiid';
        super.label = 'TenshiID';
        this.tags = ['manga', 'indonesian'];
        this.url = 'https://tenshi01.id';
        this.path = 'komik/list-mode/';
    }
}
