import { Breakpoint } from '~/types'

const lgGrid = [
  { i: 'market-panel', x: 0, y: 0, w: 9, h: 1, minW: 0, maxH: 1 },
  { i: 'marquee-panel', x: 9, y: 0, w: 3, h: 1, minW: 2, maxH: 1 },
  {
    i: 'balance-panel',
    x: 0,
    y: 1,
    w: 3,
    h: 2,
    minW: 3,
    minH: 2
  },
  {
    i: 'market-price-chart-panel',
    x: 3,
    y: 1,
    w: 6,
    h: 9,
    minW: 4,
    minH: 9
  },
  {
    i: 'order-book-panel',
    x: 9,
    y: 1,
    w: 3,
    h: 9,
    minW: 3,
    minH: 9
  },
  {
    i: 'subaccount-balance-panel',
    x: 0,
    y: 3,
    w: 3,
    h: 3,
    minW: 3,
    minH: 3
  },
  {
    i: 'trading-panel',
    x: 0,
    y: 6,
    w: 3,
    h: 10,
    minW: 3,
    minH: 8
  },
  {
    i: 'orders-panel',
    x: 3,
    y: 10,
    w: 6,
    h: 6,
    minW: 6,
    minH: 6
  },
  {
    i: 'trades-panel',
    x: 9,
    y: 10,
    w: 3,
    h: 6,
    minW: 3,
    minH: 6
  }
]

const mdGrid = [
  { i: 'market-panel', x: 0, y: 0, w: 10, h: 1, minW: 10, maxH: 1 },
  { i: 'marquee-panel', x: 0, y: 1, w: 10, h: 1, minW: 10, maxH: 1 },
  {
    i: 'balance-panel',
    x: 0,
    y: 2,
    w: 5,
    h: 3,
    minW: 5,
    minH: 3
  },
  {
    i: 'subaccount-balance-panel',
    x: 5,
    y: 2,
    w: 5,
    h: 3,
    minW: 5,
    minH: 3
  },
  {
    i: 'market-price-chart-panel',
    x: 0,
    y: 5,
    w: 10,
    h: 6,
    minW: 10,
    minH: 6
  },
  {
    i: 'order-book-panel',
    x: 0,
    y: 11,
    w: 5,
    h: 6,
    minW: 5,
    minH: 6
  },
  {
    i: 'trades-panel',
    x: 5,
    y: 11,
    w: 5,
    h: 6,
    minW: 5,
    minH: 6
  },
  {
    i: 'trading-panel',
    x: 0,
    y: 17,
    w: 10,
    h: 9,
    minW: 5,
    minH: 9
  },
  {
    i: 'orders-panel',
    x: 0,
    y: 17,
    w: 10,
    h: 5,
    minW: 5,
    minH: 5
  }
]

const smGrid = [
  { i: 'market-panel', x: 0, y: 0, w: 6, h: 1, minW: 6, maxH: 1 },
  { i: 'marquee-panel', x: 0, y: 1, w: 6, h: 1, minW: 6, maxH: 1 },
  {
    i: 'balance-panel',
    x: 0,
    y: 2,
    w: 3,
    h: 3,
    minW: 3,
    minH: 3
  },
  {
    i: 'subaccount-balance-panel',
    x: 3,
    y: 2,
    w: 3,
    h: 3,
    minW: 3,
    minH: 3
  },
  {
    i: 'market-price-chart-panel',
    x: 0,
    y: 5,
    w: 6,
    h: 6,
    minW: 6,
    minH: 6
  },
  {
    i: 'order-book-panel',
    x: 0,
    y: 11,
    w: 3,
    h: 6,
    minW: 3,
    minH: 6
  },
  {
    i: 'trades-panel',
    x: 3,
    y: 11,
    w: 3,
    h: 6,
    minW: 3,
    minH: 6
  },
  {
    i: 'trading-panel',
    x: 0,
    y: 17,
    w: 6,
    h: 9,
    minW: 6,
    minH: 9
  },
  {
    i: 'orders-panel',
    x: 0,
    y: 17,
    w: 6,
    h: 5,
    minW: 6,
    minH: 5
  }
]

const xsGrid = [
  { i: 'market-panel', x: 0, y: 0, w: 4, h: 2, minW: 4, maxH: 1 },
  { i: 'marquee-panel', x: 0, y: 2, w: 4, h: 1, minW: 4, maxH: 1 },
  {
    i: 'balance-panel',
    x: 0,
    y: 3,
    w: 4,
    h: 2,
    minW: 4,
    minH: 2
  },
  {
    i: 'subaccount-balance-panel',
    x: 0,
    y: 5,
    w: 4,
    h: 3,
    minW: 4,
    minH: 3
  },
  {
    i: 'market-price-chart-panel',
    x: 0,
    y: 8,
    w: 4,
    h: 6,
    minW: 4,
    minH: 6
  },
  {
    i: 'order-book-panel',
    x: 0,
    y: 14,
    w: 4,
    h: 6,
    minW: 4,
    minH: 6
  },
  {
    i: 'trades-panel',
    x: 0,
    y: 20,
    w: 4,
    h: 6,
    minW: 4,
    minH: 6
  },
  {
    i: 'trading-panel',
    x: 0,
    y: 26,
    w: 4,
    h: 9,
    minW: 4,
    minH: 9
  },
  {
    i: 'orders-panel',
    x: 0,
    y: 35,
    w: 4,
    h: 5,
    minW: 4,
    minH: 5
  }
]

const xxsGrid = [
  { i: 'market-panel', x: 0, y: 0, w: 2, h: 2, minW: 2, maxH: 1 },
  { i: 'marquee-panel', x: 0, y: 2, w: 2, h: 1, minW: 2, maxH: 1 },
  {
    i: 'balance-panel',
    x: 0,
    y: 3,
    w: 2,
    h: 2,
    minW: 2,
    minH: 2
  },
  {
    i: 'subaccount-balance-panel',
    x: 0,
    y: 5,
    w: 2,
    h: 3,
    minW: 2,
    minH: 3
  },
  {
    i: 'market-price-chart-panel',
    x: 0,
    y: 8,
    w: 2,
    h: 6,
    minW: 2,
    minH: 6
  },
  {
    i: 'order-book-panel',
    x: 0,
    y: 14,
    w: 2,
    h: 6,
    minW: 2,
    minH: 6
  },
  {
    i: 'trades-panel',
    x: 0,
    y: 20,
    w: 2,
    h: 6,
    minW: 2,
    minH: 6
  },
  {
    i: 'trading-panel',
    x: 0,
    y: 26,
    w: 2,
    h: 9,
    minW: 2,
    minH: 9
  },
  {
    i: 'orders-panel',
    x: 0,
    y: 35,
    w: 2,
    h: 5,
    minW: 2,
    minH: 5
  }
]

const layouts = {
  [Breakpoint.Lg]: lgGrid,
  [Breakpoint.Md]: mdGrid,
  [Breakpoint.Sm]: smGrid,
  [Breakpoint.Xs]: xsGrid,
  [Breakpoint.Xxs]: xxsGrid
}

export const gridLayouts = (breakpoint: Breakpoint = Breakpoint.Lg) =>
  layouts[breakpoint]
