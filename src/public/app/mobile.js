import appContext from "./services/app_context.js";
import MobileLayout from "./layouts/mobile_layout_v2.js";
import glob from "./services/glob.js";

glob.setupGlobs();

appContext.setLayout(new MobileLayout_v2());
appContext.start();
