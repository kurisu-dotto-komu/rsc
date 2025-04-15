import Image from "next/image";
import Link from "next/link";

import Border from "#/components/border";
import Info from "#/components/info";
import Markdown from "#/components/markdown";
import Readable from "#/components/readable";

import DumbClient from "./dumbClient";
import DumbServer from "./dumbServer";
import DumbShared from "./dumbShared";
import FancyClient from "./fancyClient";
import FancyServer from "./fancyServer";
import ImportFromClient from "./importFromClient";
import IteratedClient from "./iteratedClient";
import NestableClient from "./nestableClient";
import NestableServer from "./nestableServer";
import ParentClient from "./parentClient";
import ParentServer from "./parentServer";
import tree from "./rsc2.png";

export default function KindsPage() {
  return (
    <Readable>
      <Info>
        All 3 kinds of components can appear as children of all other component kinds in the tree.
      </Info>
      <Link href="https://www.dreamhost.com/blog/react-server-components/" target="_blank">
        <Image src={tree} alt="tree" className="mb-10 rounded-4xl shadow-lg" />
      </Link>
      <div>Network Boundaries, Importing, and Nesting.</div>
      <div>Key Point: Network</div>
      <div>
        <div>
          <li>
            TODO: Use the phrase <code>inteweaving</code>
          </li>
          <li>useContext sharing</li>
          <li>Network Boundaries</li>
          <li>Nesting</li>
          <li>Importing</li>
          <li>Dynamic Loading</li>
        </div>
        <ParentClient />
        <ParentServer />
        <Markdown>{`
## Network Boundaries


  
## Nesting vs Importing

When constructing a component tree in RSC, an important distinction is whether a component is
imported or nested (whether it children are passed as props or nested inside the component).

### Nested Components

Nested child components maintain the environment of the parent component. For example, you can nest a Server component within a child client component by passing it as a children prop.


### Imported Components

Imported components will use whichever 

        `}</Markdown>
      </div>
      <p>TODO rename server to shared when relevant</p>
      <p>TODO option to toggle borders ?</p>
      <p>You can mix child components</p>
      <NestableServer>
        <NestableClient>
          <NestableServer />
        </NestableClient>
      </NestableServer>
      <p>You can pass components as props</p>
      <NestableClient
        header={
          <NestableServer
            header={<NestableClient>Hi, I am in the header of the header!</NestableClient>}
          >
            Hi, I am in the header!
          </NestableServer>
        }
      >
        <NestableServer>
          <NestableClient>
            <NestableServer />
          </NestableClient>
        </NestableServer>
      </NestableClient>
      <p>
        TODO, differene between nested and imported clients here ! Of course, client components can
        iterate over nested client components
      </p>
      <IteratedClient
        buttonText="Iterate over passed client components"
        item={
          <Border name="inline server wrapper">
            <DumbClient />
            <FancyClient />
            <DumbShared />
          </Border>
        }
      />
      <p>Client components can iterate over passed server components</p>
      <IteratedClient
        buttonText="Iterate over Dumb Server Component"
        item={
          <Border name="inline server wrapper">
            <DumbServer />
            <DumbShared />
          </Border>
        }
      />
      <IteratedClient
        buttonText="Iterate over Fancy Server Component"
        item={
          <NestableServer>
            <NestableClient />
          </NestableServer>
        }
      />
      <p>...as long as they aren&apos;t async!</p>
      <IteratedClient buttonText="Try to Add Async Server Component" item={<FancyServer />} />
      <p>
        In Next.js, Client components can import non-async &quot;server&quot; components directly,
        but they are will be rendered in &quot;client mode&quot;.
      </p>
      <ImportFromClient />
    </Readable>
  );
}
