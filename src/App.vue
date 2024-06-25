<template>
  <div id="container"></div>
</template>

<script>
import G6 from "./global/g6/index";
export default {
  name: "App",
  data() {
    return {
      graphData: {
        nodes: [
          {
            type: "card-node",
            title: "card-node1",
            error: true,
            nodeType: "a",
            id: "node1",
            nodeLevel: 2,
            panels: [
              { title: "成功率", value: "11%" },
              { title: "耗时", value: "111" },
              { title: "错误数", value: "111" },
            ],
            x: 100,
            y: 100,
          },
          {
            type: "card-node",
            title: "card-node2",
            error: false,
            nodeType: "b",
            id: "node2",
            nodeLevel: 0,
            panels: [
              { title: "成功率", value: "11%" },
              { title: "耗时", value: "111" },
              { title: "错误数", value: "111" },
            ],
            x: 100,
            y: 200,
          },
          {
            type: "card-node",
            title: "card-node3",
            error: false,
            nodeType: "a",
            id: "node3",
            nodeLevel: 3,
            panels: [
              { title: "成功率", value: "11%" },
              { title: "耗时", value: "111" },
              { title: "错误数", value: "111" },
            ],
            collapse: true,
            x: 100,
            y: 300,
          },
          {
            type: "dify-node",
            id: "dify-node1",
            nodeType: "start",
            inputs: [
              {
                code: "source_lang",
                name: "源语言",
                type: "text",
                required: true,
              },
              {
                code: "target_lang",
                name: "目标语言",
                type: "text",
                required: true,
              },
              { code: "country", name: "国家", type: "text", required: true },
            ],
            x: 100,
            y: 400,
          }
        ],
      },
    };
  },
  mounted() {
    const container = document.getElementById("container");
    const width = container.scrollWidth;
    const height = (container.scrollHeight || 500) - 30;
    const grid = new G6.Grid();
    const graph = new G6.Graph({
      container: "container",
      width,
      height,
      // translate the graph to align the canvas's center, support by v3.5.1
      fitCenter: true,
      fitView: true,
      modes: {
        default: ["drag-canvas", "drag-node"],
      },
      // defaultNode: {
      //   type: "card-node",
      // },
      plugins: [grid],
      data: this.graphData,
    });

    graph.data(this.graphData);
    graph.render();

    if (typeof window !== "undefined")
      window.onresize = () => {
        if (!graph || graph.get("destroyed")) return;
        if (!container || !container.scrollWidth || !container.scrollHeight)
          return;
        graph.changeSize(container.scrollWidth, container.scrollHeight);
      };
  },
};
</script>

<style scoped>
#container {
  width: 100%;
  height: 100%;
}
</style>