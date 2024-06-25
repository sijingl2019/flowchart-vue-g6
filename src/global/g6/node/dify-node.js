import G6 from "@antv/g6";
import homeSvg from "@/assets/images/home.svg";
import varSvg from "@/assets/images/var.svg";
const TYPE_ICON_MAP = {
  start: homeSvg,
};
const ICON_MAP = {
  varIcon: varSvg,
};
const NAME_MAP = {
  start: "开始",
};
/**
 * data: {
    id: "node1",
    nodeType: "start",
    inputs: [
        { code: "source_lang", name: "源语言", type: 'text', required: true },
        { code: "target_lang", name: "目标语言", type: 'text', required: true },
        { code: "country", name: "国家", type: 'text', required: true }
    ],
    x: 100,
    y: 100,
 * }
 *
 */
export default {
  name: "dify-node",
  extendName: "single-node",
  options: {
    drawShape: function drawShape(cfg, group) {
      const color = "#30BF78";
      const r = 4;
      const inputSize = cfg.inputs?.length ?? 0;
      const shape = group.addShape("rect", {
        attrs: {
          x: 0,
          y: 0,
          width: 200,
          height: 20 + inputSize * 20,
          stroke: color,
          radius: r,
        },
        // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
        name: "main-box",
        draggable: true,
      });

      group.addShape("rect", {
        attrs: {
          x: 0,
          y: 0,
          width: 200,
          height: 20,
          fill: color,
          radius: [r, r, 0, 0],
        },
        // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
        name: "title-box",
        draggable: true,
      });

      // left icon
      group.addShape("image", {
        attrs: {
          x: 4,
          y: 2,
          height: 16,
          width: 16,
          cursor: "pointer",
          img: TYPE_ICON_MAP[cfg.nodeType || "home"],
        },
        // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
        name: "node-icon",
      });

      // title text
      group.addShape("text", {
        attrs: {
          textBaseline: "top",
          y: 2,
          x: 24,
          lineHeight: 20,
          text: NAME_MAP[cfg.nodeType || "home"],
          fill: "#fff",
        },
        // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
        name: "title",
      });

      // The content list
      cfg.inputs?.forEach((item, index) => {
        // left icon
        group.addShape("image", {
          attrs: {
            x: 4,
            y: 25 + index * 20,
            height: 16,
            width: 16,
            cursor: "pointer",
            img: ICON_MAP["varIcon"],
          },
          // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
          name: `node-input-icon-${index}`,
        });

        // name text
        group.addShape("text", {
          attrs: {
            textBaseline: "top",
            y: 25 + index * 20,
            x: 24,
            lineHeight: 20,
            text: item.name,
            fill: "rgba(0,0,0, 0.4)",
          },
          // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
          name: `index-title-${index}`,
        });
      });
      return shape;
    },
  },
};
