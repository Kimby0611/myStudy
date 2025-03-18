import ComputEd from "@/components/computed_watch/ComputEd.vue";
import ComWat from "@/components/computed_watch/ComWat.vue";
import WatCh from "@/components/computed_watch/WatCh.vue";
import BasicPage from "@/components/databindings/BasicPage.vue";
import BindStr from "@/components/databindings/BindStr.vue";
import ButtonDisa from "@/components/databindings/ButtonDisa.vue";
import CheckBox from "@/components/databindings/CheckBox.vue";
import CheckBoxArray from "@/components/databindings/CheckBoxArray.vue";
import ClassBind from "@/components/databindings/ClassBind.vue";
import DataBingingPage from "@/components/databindings/DataBingingPage.vue";
import FormBind from "@/components/databindings/FormBind.vue";
import ImgSrc from "@/components/databindings/ImgSrc.vue";
import InlineBind from "@/components/databindings/InlineBind.vue";
import InputNumber from "@/components/databindings/InputNumber.vue";
import RadioButton from "@/components/databindings/RadioButton.vue";
import SelectObj from "@/components/databindings/SelectObj.vue";
import TextareaModel from "@/components/databindings/TextareaModel.vue";
import VBindModel from "@/components/databindings/VBindModel.vue";
import HomePage from "@/components/HomePage.vue";
import ButtonEvent from "@/components/rendering/ButtonEvent.vue";
import ChangeEvent from "@/components/rendering/ChangeEvent.vue";
import GraShow from "@/components/rendering/GraShow.vue";
import ListRender from "@/components/rendering/ListRender.vue";
import RenderGra from "@/components/rendering/RenderGra.vue";
import RenderingPage from "@/components/rendering/RenderingPage.vue";
// import RenderingPage from "@/components/rendering/RenderingPage.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/databinding",
    component: DataBingingPage,
    children: [
      { path: "/basic", component: BasicPage },
      { path: "/bindstr", component: BindStr },
      { path: "/formbind", component: FormBind },
      { path: "/number", component: InputNumber },
      { path: "/textarea", component: TextareaModel },
      { path: "/select", component: SelectObj },
      { path: "/checkbox", component: CheckBox },
      { path: "/checkboxarray", component: CheckBoxArray },
      { path: "/radio", component: RadioButton },
      { path: "/img", component: ImgSrc },
      { path: "/buttondisa", component: ButtonDisa },
      { path: "/class", component: ClassBind },
      { path: "/inline", component: InlineBind },
      { path: "/bindmodel", component: VBindModel }
    ],
  },
  { path: "/comwat", component: ComWat,
    children: [
      {path: '/computed', component: ComputEd},
      {path: '/watch', component: WatCh}
    ]
   },
  {
    path: "/rendering",
    component: RenderingPage,
    children: [
      { path: "/listrender", component: ListRender },
      { path: "/rendergra", component: RenderGra },
      { path: "/grashow", component: GraShow },
      { path: "/click", component: ButtonEvent },
      { path: "/change", component: ChangeEvent }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
