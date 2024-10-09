import { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    const acc = document.getElementsByClassName('accordion') as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function () {
        const pannel = this.nextElementSibling as HTMLElement;
        const line = pannel.nextElementSibling as HTMLElement;
        const icon = this.querySelector('.fa-chevron-down') as HTMLElement;

        if (pannel?.classList.contains('active')) {
          pannel.style.maxHeight = '0';
          pannel.style.paddingTop = '0';
          line.classList.remove('active');
          icon.style.transform = 'rotate(0deg)';
          setTimeout(() => {
            pannel.classList.remove('active');
            pannel.style.display = 'none';
          }, 500);
        } else {
          pannel.style.display = 'block';
          pannel.style.maxHeight = '0';
          setTimeout(() => {
            pannel.classList.add('active');
            line.classList.add('active');
            pannel.style.maxHeight = pannel.scrollHeight + 'px';
            pannel.style.paddingTop = '10px';
            icon.style.transform = 'rotate(180deg)';
          }, 10);
        }
      });
    }
  }, []);



  return (
    <div>
      {/* Component JSX content */}
    </div>
  );
};

export default MyComponent;
