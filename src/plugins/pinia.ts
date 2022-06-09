import app from '@/plugins/app'
import { createPinia } from 'pinia'
import { PiniaHistoryPlugin } from "@/modules/ShopCart/plugins/PiniaHistoryPlugin";
import FontAwesomePlugin from "@/modules/ShopCart/plugins/FontAwesome";

const pinia = createPinia();
pinia.use(PiniaHistoryPlugin);

app.use(pinia)
app.use(FontAwesomePlugin)
