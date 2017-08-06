const comics = {
  4: {title: 'Captain American'},
  5: {name: 'Spider man'}
};

export default function RequestCache(url) {
  return new Promise((resolve, reject) => {
    const comicId = 4;
    console.log('abc')
    process.nextTick(
      () => comics[comicId] ? resolve(comics[comicId]) : reject({
        error: 'Comic with ' + comicId + ' not found.',
      })
    );
  });
}