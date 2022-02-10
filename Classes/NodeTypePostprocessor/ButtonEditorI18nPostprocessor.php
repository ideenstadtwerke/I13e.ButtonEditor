<?php

namespace I13e\ButtonEditor\NodeTypePostprocessor;

use Closure;
use Neos\ContentRepository\Domain\Model\NodeType;
use Neos\ContentRepository\NodeTypePostprocessor\NodeTypePostprocessorInterface;

/**
 * Add translation labels for ButtonEditors
 * Probably NodeTypeConfigurationEnrichmentAspect should be optimized to support some configuration for that purpose
 */
class ButtonEditorI18nPostprocessor implements NodeTypePostprocessorInterface
{
    /**
     * @param NodeType $nodeType
     * @param array $configuration
     * @param array $options
     * @return void
     */
    public function process(NodeType $nodeType, array &$configuration, array $options): void
    {
        if (isset($configuration['properties'])) {
            $nodeTypeLabelIdPrefix = $this->generateNodeTypeLabelIdPrefix($nodeType->getName());
            foreach ($configuration['properties'] as $propertyName => &$propertyConfig) {
                $editorName = $propertyConfig['ui']['inspector']['editor'] ?? null;
                if ($editorName === 'I13e.ButtonEditor/ButtonEditor') {
                    $optionValues = $propertyConfig['ui']['inspector']['editorOptions']['values'] ?? [];

                    $translationIdGenerator = function ($path) use ($nodeTypeLabelIdPrefix, $propertyName) {
                        return $nodeTypeLabelIdPrefix . 'properties.' . $propertyName . '.' . $path;
                    };
                    $this->applyButtonEditorLabels($optionValues, $translationIdGenerator);
                }
            }
        }
    }

    /**
     * Generates a label prefix for a specific node type with this format: "Vendor_Package:NodeTypes.NodeTypeName"
     *
     * @param string $nodeTypeName
     * @return string
     */
    protected function generateNodeTypeLabelIdPrefix($nodeTypeName): string
    {
        $nodeTypeNameParts = explode(':', $nodeTypeName, 2);
        // in case the NodeType has just one section we default to 'Neos.Neos' as package as we don't have any further information.
        $packageKey = isset($nodeTypeNameParts[1]) ? $nodeTypeNameParts[0] : 'Neos.Neos';
        $nodeTypeName = $nodeTypeNameParts[1] ?? $nodeTypeNameParts[0];

        return sprintf('%s:%s:', $packageKey, 'NodeTypes.' . $nodeTypeName);
    }

    /**
     * @param array $optionValues
     * @param Closure $translationIdGenerator
     * @return void
     */
    protected function applyButtonEditorLabels(
        array &$optionValues,
        Closure $translationIdGenerator
    ): void {
        foreach ($optionValues as $value => &$optionConfiguration) {
            if ($optionConfiguration === null) {
                continue;
            }
            if (
                array_key_exists('label', $optionConfiguration)
                && trim($optionConfiguration['label']) === 'i18n'
            ) {
                $optionConfiguration['label'] = $translationIdGenerator('buttonEditor.values.' . $value);
            }
        }
    }

}
