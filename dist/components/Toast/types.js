const defaultToastOpts = {
    duration: 3000,
    props: {},
    progress: true
};
export class Toast {
    id;
    component;
    title;
    content;
    opts;
    constructor(id, component, title, content, opts) {
        this.id = id;
        this.component = component;
        this.title = title;
        this.content = content;
        this.opts = {
            ...defaultToastOpts,
            ...opts
        };
    }
}
