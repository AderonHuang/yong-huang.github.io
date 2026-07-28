// Override: only 2 modes (light/dark, no system)

let toggleThemeSetting = () => {
  let themeSetting = determineThemeSetting();
  if (themeSetting == "light") {
    setThemeSetting("dark");
  } else {
    setThemeSetting("light");
  }
};

let setThemeSetting = (themeSetting) => {
  localStorage.setItem("theme", themeSetting);
  document.documentElement.setAttribute("data-theme-setting", themeSetting);
  applyTheme();
};

let applyTheme = () => {
  let theme = determineComputedTheme();
  transTheme();
  setHighlight(theme);
  setGiscusTheme(theme);
  setSearchTheme(theme);
  updateCalendarUrl();

  if (typeof mermaid !== "undefined") setMermaidTheme(theme);
  if (typeof Diff2HtmlUI !== "undefined") setDiff2htmlTheme(theme);
  if (typeof echarts !== "undefined") setEchartsTheme(theme);
  if (typeof Plotly !== "undefined") setPlotlyTheme(theme);
  if (typeof vegaEmbed !== "undefined") setVegaLiteTheme(theme);

  document.documentElement.setAttribute("data-theme", theme);

  // Update toggle button icon
  let toggle = document.getElementById("light-toggle");
  if (toggle) {
    let icon = toggle.querySelector("i");
    if (icon) {
      icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }
  }

  let tables = document.getElementsByTagName("table");
  for (let i = 0; i < tables.length; i++) {
    if (theme == "dark") tables[i].classList.add("table-dark");
    else tables[i].classList.remove("table-dark");
  }
};

let setHighlight = (theme) => {
  if (theme == "dark") {
    document.getElementById("highlight_theme_light").media = "none";
    document.getElementById("highlight_theme_dark").media = "";
  } else {
    document.getElementById("highlight_theme_dark").media = "none";
    document.getElementById("highlight_theme_light").media = "";
  }
};

let setGiscusTheme = (theme) => {
  function sendMessage(message) {
    const iframe = document.querySelector("iframe.giscus-frame");
    if (!iframe) return;
    iframe.contentWindow.postMessage({ giscus: message }, "https://giscus.app");
  }
  sendMessage({ setConfig: { theme: theme } });
};

let setMermaidTheme = (theme) => {
  if (theme == "light") theme = "default";
  document.querySelectorAll(".mermaid").forEach((elem) => {
    let svgCode = elem.previousSibling.childNodes[0].innerHTML;
    elem.removeAttribute("data-processed");
    elem.innerHTML = svgCode;
  });
  mermaid.initialize({ theme: theme });
  window.mermaid.init(undefined, document.querySelectorAll(".mermaid"));
};

let setDiff2htmlTheme = (theme) => {
  document.querySelectorAll(".diff2html").forEach((elem) => {
    let textData = elem.previousSibling.childNodes[0].innerHTML;
    elem.innerHTML = "";
    const configuration = { colorScheme: theme, drawFileList: true, highlight: true, matching: "lines" };
    const diff2htmlUi = new Diff2HtmlUI(elem, textData, configuration);
    diff2htmlUi.draw();
  });
};

let setEchartsTheme = (theme) => {
  document.querySelectorAll(".echarts").forEach((elem) => {
    let jsonData = elem.previousSibling.childNodes[0].innerHTML;
    echarts.dispose(elem);
    if (theme === "dark") var chart = echarts.init(elem, "dark-fresh-cut");
    else var chart = echarts.init(elem);
    chart.setOption(JSON.parse(jsonData));
  });
};

let setPlotlyTheme = (theme) => {
  document.querySelectorAll(".js-plotly-plot").forEach((elem) => {
    let jsonData = JSON.parse(elem.previousSibling.childNodes[0].innerHTML);
    if (theme === "dark") {
      elem.layout.template = { paper_bgcolor: "rgb(17,17,17)", plot_bgcolor: "rgb(17,17,17)" };
    } else {
      elem.layout.template = { paper_bgcolor: "white", plot_bgcolor: "white" };
    }
    Plotly.relayout(elem, elem.layout);
  });
};

let setVegaLiteTheme = (theme) => {
  document.querySelectorAll(".vega-lite").forEach((elem) => {
    let jsonData = elem.previousSibling.childNodes[0].innerHTML;
    elem.innerHTML = "";
    if (theme === "dark") vegaEmbed(elem, JSON.parse(jsonData), { theme: "dark" });
    else vegaEmbed(elem, JSON.parse(jsonData));
  });
};

let setSearchTheme = (theme) => {
  const ninjaKeys = document.querySelector("ninja-keys");
  if (!ninjaKeys) return;
  if (theme === "dark") ninjaKeys.classList.add("dark");
  else ninjaKeys.classList.remove("dark");
};

let transTheme = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 260);
};

let determineThemeSetting = () => {
  let themeSetting = localStorage.getItem("theme");
  // Only 2 modes: light or dark. Default to light.
  if (themeSetting != "dark" && themeSetting != "light") {
    themeSetting = "light";
  }
  return themeSetting;
};

let determineComputedTheme = () => {
  return determineThemeSetting();
};

let initTheme = () => {
  let themeSetting = determineThemeSetting();
  setThemeSetting(themeSetting);

  document.addEventListener("DOMContentLoaded", function () {
    const mode_toggle = document.getElementById("light-toggle");
    if (mode_toggle) {
      mode_toggle.addEventListener("click", function () {
        toggleThemeSetting();
      });
    }
  });
};

let getCalendarBgColor = () => {
  let theme = determineComputedTheme();
  return theme === "dark" ? "333333" : "f9f9f9";
};

let getCalendarUrl = (calendarId, timezone = "UTC") => {
  const baseUrl = "https://calendar.google.com/calendar/embed";
  const params = new URLSearchParams({
    src: calendarId,
    ctz: timezone,
    mode: "WEEK",
    showTitle: "0",
    showPrint: "0",
    showCalendars: "0",
    showTabs: "0",
    bgcolor: getCalendarBgColor(),
  });
  return `${baseUrl}?${params.toString()}`;
};

let updateCalendarUrl = () => {
  const iframe = document.getElementById("calendar-iframe");
  if (iframe && iframe.dataset.calendarId) {
    iframe.src = getCalendarUrl(iframe.dataset.calendarId, iframe.dataset.timezone || "UTC");
  }
};

initTheme();
