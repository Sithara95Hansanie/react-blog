import React from "react";

function Flex() {
  return (
    <div>
      <h2>Flex</h2>
      <p>
        Let all the flexible items be the same length, regardless of its
        content:
      </p>
      <div className="main-card-wrap">
        <div className="inner-card">Item 1</div>
        <div className="inner-card">Item 2</div>
        <div className="inner-card">Item 3</div>
      </div>

      <h2>CSS flex-basis Property</h2>
      <p>
        The flex-basis property specifies the initial length of a flexible item.
      </p>
      <div className="main-card-wrap2">
        <div className="inner-card2">Item 1</div>
        <div className="inner-card2">Item 2</div>
        <div className="inner-card2">Item 3</div>
        <div className="inner-card2">Item 4</div>
        <div className="inner-card2">Item 5</div>
      </div>
      <h1>The flex-direction Property</h1>
      <div className="main-card-wrap3">
        <div className="inner-card3">Item 1</div>
        <div className="inner-card3">Item 2</div>
        <div className="inner-card3">Item 3</div>
        <div className="inner-card3">Item 4</div>
        <div className="inner-card3">Item 5</div>
        <div className="inner-card3">Item 6</div>
        <div className="inner-card3">Item 7</div>
        <div className="inner-card3">Item 8</div>
        <div className="inner-card3">Item 9</div>
        <div className="inner-card3">Item 10</div>{" "}
        <div className="inner-card3">Item 11</div>
        <div className="inner-card3">Item 12</div>
        <div className="inner-card3">Item 13</div>
        <div className="inner-card3">Item 14</div>
        <div className="inner-card3">Item 15</div>
      </div>
      <h1>The flex-flow Property</h1>
      <p>The flex-flow property is a shorthand property for:</p>
      <ul>
        <li>flex-direction</li>
        <li>flex-wrap</li>
      </ul>
      <div className="main-card-wrap4">
        <div className="inner-card4">Item 1</div>
        <div className="inner-card4">Item 2</div>
        <div className="inner-card4">Item 3</div>
        <div className="inner-card4">Item 4</div>
        <div className="inner-card4">Item 5</div>
      </div>
      <h1>The flex-grow Property</h1>
      <p>
        The flex-grow property specifies how much the item will grow relative to
        the rest of the flexible items inside the same container.
      </p>
      <div className="main-card-wrap5">
        <div className="inner-card">Item 1</div>
        <div className="inner-card">Item 2</div>
        <div className="inner-card">Item 3</div>
        <div className="inner-card">Item 4</div>
        <div className="inner-card">Item 5</div>
        <div className="inner-card">Item 6</div>
      </div>

      <h1>Flex Shrink</h1>
      <p>
        The flex-shrink property specifies how the item will shrink relative to
        the rest of the flexible items inside the same container.
      </p>
      <div className="main-card-wrap6">
        <div className="inner-card">Item 1</div>
        <div className="inner-card">Item 2</div>
        <div className="inner-card">Item 3</div>
        <div className="inner-card">Item 4</div>
        <div className="inner-card">Item 5</div>
        <div className="inner-card">Item 6</div>
      </div>
    </div>
  );
}
export default Flex;
