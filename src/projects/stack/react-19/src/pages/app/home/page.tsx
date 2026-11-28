import { HelloWorld } from '@workspace/shadcn-ui-radix/blocks/hello-world/hello-world';

export default function HomePage() {
  return (
    <main className="flex min-h-svh flex-col">
      <section className="flex grow flex-col items-center justify-center p-2 *:p-2">
        <div>
          <h1 className="text-balance">react-19</h1>
        </div>
        <div>
          <span>
            этот блок напрямую наследуеться из
            '@workspace/shadcn-ui-radix/blocks/hello-world/hello-world'!!!
          </span>
          <HelloWorld />
        </div>
      </section>
    </main>
  );
}
