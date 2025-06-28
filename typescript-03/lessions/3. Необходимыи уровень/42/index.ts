{
  const box = document.querySelector('.box') as HTMLElement;
  box.textContent = 'fdgd';
  const input = document.querySelector('input');
  input?.value;
  const link = document.querySelector('a');
  if (link) link.href = 'fd.fd';
  const p = document.querySelector('.paragraph') as HTMLParagraphElement;
  const links = document.querySelectorAll('.a');

  const elem = document.createElement('a');

  link?.addEventListener('click', (elem) => elem.preventDefault());

  console.log(p);
}
