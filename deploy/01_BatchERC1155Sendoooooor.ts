export default async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("BatchERC1155Sendoooooor", {
    from: deployer,
    log: true
  });
};
