<<<<<<< HEAD
import TransactionComp from "../_components/TransactionComp";
import type { NextPage } from "next";
import { Hash } from "viem";
import { isZeroAddress } from "~~/utils/scaffold-eth/common";

type PageProps = {
  params: { txHash?: Hash };
};

export function generateStaticParams() {
  // An workaround to enable static exports in Next.js, generating single dummy page.
  return [{ txHash: "0x0000000000000000000000000000000000000000" }];
}
const TransactionPage: NextPage<PageProps> = ({ params }: PageProps) => {
  const txHash = params?.txHash as Hash;

  if (isZeroAddress(txHash)) return null;

  return <TransactionComp txHash={txHash} />;
};

export default TransactionPage;
=======
import TransactionComp from "../_components/TransactionComp";
import type { NextPage } from "next";
import { Hash } from "viem";
import { isZeroAddress } from "~~/utils/scaffold-eth/common";

type PageProps = {
  params: { txHash?: Hash };
};

export function generateStaticParams() {
  // An workaround to enable static exports in Next.js, generating single dummy page.
  return [{ txHash: "0x0000000000000000000000000000000000000000" }];
}
const TransactionPage: NextPage<PageProps> = ({ params }: PageProps) => {
  const txHash = params?.txHash as Hash;

  if (isZeroAddress(txHash)) return null;

  return <TransactionComp txHash={txHash} />;
};

export default TransactionPage;
>>>>>>> 9db02baa6c8d8c8cfb8309943b17d8e34a6f99a1
