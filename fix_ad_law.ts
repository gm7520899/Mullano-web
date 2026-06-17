import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');

const replacements: [string, string][] = [
  ['极具质感', '富有质感'],
  ['极高环保性', '高环保性'],
  ['极致哑光漫反射', '高级哑光漫反射'],
  ['漫反射效果极佳', '漫反射效果优异'],
  ['打造完美室内软装', '打造理想室内软装'],
  ['超强耐洗刷', '强效耐洗刷'],
  ['卓越抗微生物', '优异抗微生物'],
  ['极致环保', '严苛环保'],
  ['100%自交联', '纯自交联'],
  ['完美基础', '理想基础'],
  ['100% self-crosslinking', 'pure self-crosslinking'],
  ['100% 自交联', '纯自交联'],
  ['极高的附着力', '出众的附着力'],
  ['卓越的附着基础', '优异的附着基础'],
  ['extremely high adhesion', 'outstanding adhesion'],
  ['极致防污', '强效防污'],
  ['完美保留', '完好保留'],
  ['最佳拒水防污效果', '优异拒水防污效果'],
  ['光影过渡极其柔和', '光影过渡非常柔和']
];

for (const [target, replacement] of replacements) {
  content = content.split(target).join(replacement);
}

fs.writeFileSync('src/App.tsx', content, 'utf8');
console.log('Done');
