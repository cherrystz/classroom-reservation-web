
import ZestIcons from './zest.js';

function createIconElement(uid, options) {
  if (!(uid in ZestIcons)) {
    throw new Error("Invalid UID for icon: " + uid);
  }

  var options = options || {};
  var size = options.size || 24;
  var color = options.color || "#000";
  var className = options.className || "";
  var style = options.valign ? "valign:" + options.valign : "";
  var paths = ZestIcons[uid].paths;
  var div = document.createElement("div");

  div.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 24 24" class="${className}" style="${style}"><g fill="${color}">${paths}</g></svg>`;

  return div.children[0];
}

//sample 1 *ประกาศตัวแปรแบบเต็มๆ*
var cool_face = document.getElementById("cool-face");
var icon = createIconElement("cool-face", {
  color: "#f09",
  size: 48,
  valign: "middle",
});
//sample 1 *เรียกใช้*
cool_face.appendChild(icon);


//sample2 แบบสั้นกว่า อันนี้ดีกว่านะะ
document.getElementById("sword").appendChild(createIconElement("sword",{color:'#567',size:60,valign:''})); //works better
//getElementByID("*div id="__"*")            createIconElement("*icon name*")
