export const toggleMenu = (): void => {
    const menuContainer = document.getElementById('menu-mobile') as HTMLElement
    console.log(menuContainer);
    
    menuContainer.classList.toggle('-translate-x-full')
    menuContainer.classList.toggle('-left-8')
}