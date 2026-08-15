import React from 'react';
import { createRoot } from 'react-dom/client';
import PixelBlast from './backgrounds/PixelBlast';
import ColorBends from './backgrounds/ColorBends';
import Plasma from './backgrounds/Plasma';
import LiquidEther from './backgrounds/LiquidEther';
import LiquidChrome from './backgrounds/LiquidChrome';
import ShapeGrid from './backgrounds/ShapeGrid';
import Ballpit from './backgrounds/Ballpit';
import DotGrid from './backgrounds/DotGrid';
import Galaxy from './backgrounds/Galaxy';
import Lightning from './backgrounds/Lightning';
import Aurora from './backgrounds/Aurora';
import LightRays from './backgrounds/LightRays';
import LegacyBand from './backgrounds/LegacyBand';
import './background-root.css';

const MODES = [
  { id: 'rays', name: '\u5149\u7ebf', icon: 'fa-sun', Component: LightRays, props: { raysOrigin: 'top-center', raysColor: '#ffffff', raysSpeed: 1, lightSpread: 0.5, rayLength: 3, fadeDistance: 1, followMouse: true, mouseInfluence: 0.16 } },
  { id: 'band', name: '\u5149\u5e26', icon: 'fa-circle-notch', Component: LegacyBand, props: {} },
  { id: 'pixel-blast', name: 'Pixel Blast', icon: 'fa-braille', Component: PixelBlast, props: { color: '#B497CF', enableRipples: true, liquid: true, liquidStrength: 0.12 } },
  { id: 'color-bends', name: 'Color Bends', icon: 'fa-wave-square', Component: ColorBends, props: { mouseInfluence: 1.25, parallax: 0.7 } },
  { id: 'plasma', name: 'Plasma', icon: 'fa-fire-flame-curved', Component: Plasma, props: { color: '#B497CF', mouseInteractive: true } },
  { id: 'liquid-ether', name: 'Liquid Ether', icon: 'fa-water', Component: LiquidEther, props: { mouseForce: 24, autoDemo: true } },
  { id: 'liquid-chrome', name: 'Liquid Chrome', icon: 'fa-droplet', Component: LiquidChrome, props: { interactive: true } },
  { id: 'shape-grid', name: 'Shape Grid', icon: 'fa-grip', Component: ShapeGrid, props: { borderColor: '#6b7280', hoverFillColor: '#d1d5db', hoverTrailAmount: 4 } },
  { id: 'ballpit', name: 'Ballpit', icon: 'fa-circle', Component: Ballpit, props: { followCursor: true } },
  { id: 'dot-grid', name: 'Dot Grid', icon: 'fa-ellipsis', Component: DotGrid, props: { proximity: 175, shockStrength: 6 } },
  { id: 'galaxy', name: 'Galaxy', icon: 'fa-star', Component: Galaxy, props: { mouseInteraction: true, mouseRepulsion: true, repulsionStrength: 2.5 } },
  { id: 'lightning', name: 'Lightning', icon: 'fa-bolt', Component: Lightning, props: {} },
  { id: 'aurora', name: 'Aurora', icon: 'fa-rainbow', Component: Aurora, props: {} }
];

function create(container, initialMode) {
  const root = createRoot(container);
  let mode = initialMode;

  function render() {
    const selected = MODES.find(item => item.id === mode) || MODES[0];
    root.render(<selected.Component key={selected.id} {...selected.props} />);
  }

  render();
  return {
    setMode(nextMode) {
      if (!MODES.some(item => item.id === nextMode)) return;
      mode = nextMode;
      render();
    },
    destroy() {
      root.unmount();
    }
  };
}

window.ReactBitsBackgrounds = {
  modes: MODES.map(({ Component, props, ...metadata }) => metadata),
  create
};
