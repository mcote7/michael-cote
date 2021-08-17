
export const animateBulb = () => {
  const BULB = document.getElementById('bulb');
  BULB.animate([
    { backgroundColor: '#F00' },
    { backgroundColor: '#A00', boxShadow: 'rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 0' }
  ], {
    duration: 333,
    easing: 'ease-in-out'
  });
};