declare namespace Mod {
    /**
     * 获取当前模组的名称
     */
    function getName(): string

    /**
     * 获取当前模组的类型
     */
    function getType(): string

    /**
     * 获取当前模组的目录
     */
    function getModDir(): string

    /**
     * 获取当前模组的数据目录
     */
    function getDataDir(): string

    /**
     * 获取当前模组的配置目录
     */
    function getConfigDir(): string

    /**
     * 获取当前模组的语言目录
     */
    function getLangDir(): string

    /**
     * 获取当前模组的日志
     */
    function getLogger(): Logger
}
