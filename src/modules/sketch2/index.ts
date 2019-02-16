import * as p5 from "p5";
import "p5/lib/addons/p5.sound";

let input: any;
export default function sketch(p: p5) {
  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.background(255);

    // Create an Audio input
    input = new p5.AudioIn();
    input.start();
  };

  p.draw = () => {
    // Get the overall volume (between 0 and 1.0)
    const volume = input.getLevel();
    // If the volume > 0.1,  a rect is drawn at a random location.
    // The louder the volume, the larger the rectangle.
    const threshold = 0.05;
    if (volume > threshold) {
      p.stroke(0);
      p.fill(0, 100);
      p.rect(p.random(40, p.width), p.random(p.height), volume*50, volume*50);
    }

    // Graph the overall potential volume, w/ a line at the threshold
    const y = p.map(volume, 0, 1, p.height, 0);
    const ythreshold = p.map(threshold, 0, 1, p.height, 0);

    p.noStroke();
    p.fill(175);
    p.rect(0, 0, 20, p.height);
    // Then draw a rectangle on the graph, sized according to volume
    p.fill(0);
    p.rect(0, y, 20, y);
    p.stroke(0);
    p.line(0, ythreshold, 19, ythreshold);
  };
}
