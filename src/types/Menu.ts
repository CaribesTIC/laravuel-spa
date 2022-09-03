export interface Menu {
    id: number;
    title: string;
    menu_id: number;
    path: string;
    sort: number;
    icon: string;
    children_menus?: Menu[];
    alias: string;
}