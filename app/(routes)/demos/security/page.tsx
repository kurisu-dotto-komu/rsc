export default function SecurityPage() {
  return (
    <div>
      <h1>Security</h1>
      <div>
        TODO params, searchParams, cookies, headers, etc.
        <ul>
          <li>Where to put secrets?</li>
          <li>
            https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#keeping-server-only-code-out-of-the-client-environment
          </li>
          <li>
            <code>npm install server-only</code>
          </li>
        </ul>
      </div>
      <div>
        https://react.dev/reference/react/experimental_taintUniqueValue
        https://react.dev/reference/react/experimental_taintObjectReference
      </div>
    </div>
  );
}
