// i18n.ts
import { createI18n, I18nOptions } from 'vue-i18n';


const options: I18nOptions = {
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'zh',
  messages: {
    zh: {
      main:{
        notice: "本工具仅供冷权指令服使用，免费游戏，请勿倒卖，官方QQ群563867095",
        copy: "复制",
        success: "已复制",
        text1: "请输入物品",
        text2: "请输入数量",
        execute: "执行(已废除)",
        tips: "请先在下方的输入框中输入一个数字，然后再勾选属性词条，例如1代表该词条强化一次",
        version:"仅供冷权指令服使用",
        views:"截至目前,LunarCoreWebTools已经被安装/访问了",
        time:"次   © 2024 lctoolsweb",
        introduce:"本工具仅供冷权指令服使用，免费游戏，请勿倒卖，官方QQ群563867095",
      },
      menu:{
        main:"控制台代码生成",
        frequently:"常用",
        customrelics:"自定义遗器",
        graduationrelics:"毕业遗器",
        monsterspawning:"怪物生成",
        presetshortcuts:"预设快捷指令",
        lightcones:"光锥",
        item:"物品",
        character:"角色",
        food:"食物",
        avatar:"头像",
        scene:"场景",
        about:"关于",
        remotecontrol:"远程",
        suggest:"推荐"


      },
      monster:{
        monster1:"局外显示怪物",
        monster2:"局内战斗怪物",
        number:"数量",
        level:"等级",
        radius:"半径",

      },
      
      
      ct: {
        title: "LunarCoreWebTools",
        introduce: "适用于LunarCore的web命令生成器",
        start: "开始",
        languageSwitchSuccess:"语言切换成功"
      },
      commuse: {
        item: "物品",
        number: "数量",
      },
      relic:{
        relic:"遗器",
        basestats:"基础属性",
        advancedstats:"进阶属性",
        enhancementlevel:"强化等级",

      }
    },
    en: {
      ct:{
        title: "LunarCoreWebTools-EN",
        introduce: "Web command generator for LunarCore",
        start: "start",
        languageSwitchSuccess:"The language switch is successful"
      },
      main:{
        notice: "LunarCore and any other derivatives are free software, and if you paid for it, you've been scammed, so get your money back and report it in time.",
        copy: "copy",
        success: "copied",
        text1: "Please enter the item",
        test2: "please enter the number",
        execute: "execute",
        tips: "If the command is not refreshed, please check the attribute entry again",
        version:"ToolsVersion:0.1.4 GameVersion:2.3.0",
        views:"Up to now, LunarCoreWebTools has been accessed/installed",
        time:"times  © 2024 lctoolsweb",
      },
      monster:{
        monster1: "Outsider Show Monster",
        monster2: "In-game battle monster",
        number: "quantity",
        level: "level",
        radius: "radius",

},
      menu:{
        main:"Console code generation",
        frequently:"frequently used",
        customrelics:"Custom_relics",
        graduationrelics:"Graduation_relics",
        monsterspawning:"Monster_spawning",
        presetshortcuts:"Preset_shortcuts",
        lightcones:"Light_Cones",
        item:"item",
        character:"character",
        food:"food",
        avatar:"avatar",
        scene:"scene",
        about:"about",
        remotecontrol:"Remote_control",
        suggest:"suggest"


      },
      commuse: {
        item: "item",
        number: "number",
      },
      relic:{
        relic:"relic",
        basestats:"Base Stats",
        advancedstats:"Advanced Stats",
        enhancementlevel:"Enhancement level",

      }

    },
    
  },
};
const i18n = createI18n(options);

export default i18n;

