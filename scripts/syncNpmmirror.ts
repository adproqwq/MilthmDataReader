import packageJson from '../package.json';

const syncNpmmirror = async () => {
  const pkg = packageJson;
  await fetch(`https://registry-direct.npmmirror.com/${pkg.name}/sync`, {
    method: "PUT",
  });
};
syncNpmmirror();