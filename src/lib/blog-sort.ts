import type { CollectionEntry } from 'astro:content';

/** Ordena posts do mais recente para o mais antigo por `pubDate`. Quando dois
 * posts têm o mesmo `pubDate` (ex: ambos datados sem horário, ou com o mesmo
 * horário), usa o `id` (slug) como desempate — evita que a ordem de exibição
 * fique sujeita à ordem de iteração do `getCollection`, que não é garantida. */
export function comparePostsByDateDesc(
  a: CollectionEntry<'blog'>,
  b: CollectionEntry<'blog'>
): number {
  const dateDiff = b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
  return dateDiff !== 0 ? dateDiff : a.id.localeCompare(b.id);
}
