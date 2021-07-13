import { useEffect, useState } from "react";

const useDTooltip = (props) => {
  const {id, placement} = props;
  const [tooltipStyle, setTooltipStyle] = useState({})
  const [tooltipHelperClass, setTooltipHelperClass] = useState("")
  const [tooltipVisible, setTooltipVisible] = useState();

  const tooltipWrapperId = `${id}_dtooltip_wrapper`
  const tooltipId = `${id}_dtooltip`

    // initialize
    useEffect(() => {
      window.addEventListener("resize", onWindowResize)
      return () => {
        window.removeEventListener("resize", onWindowResize)
      }
    }, [])

    function onWindowResize(e){
      // on screen resize, measure, then position
      setTooltipStyle(getTooltipPosition(getTooltipDimensions(tooltipWrapperId, tooltipId), placement))
    }
  
    function getTooltipDimensions(wrapperId, tooltipId){
      const wrapperNode = document.getElementById(wrapperId)
      const tooltipNode = document.getElementById(tooltipId)
      if(tooltipNode){
        let wrapperRect = wrapperNode.getBoundingClientRect()
        let tooltipRect = tooltipNode.getBoundingClientRect()
        return {wrapperRect, tooltipRect}
      }
      return {}
    }

    function getTooltipPosition(tooltipDimensions, placement){
      const {wrapperRect, tooltipRect} = tooltipDimensions;
      // calculate the proper top and left positions based on available screen dimensions, 
      // the tooltip should always be visible and never cutoff
      let top = 0
      let left = 0
      switch(placement){
        case "top-right":
          top = wrapperRect.top - tooltipRect.height - 5
          left = wrapperRect.left + (wrapperRect.width) - 15
          break;
        case "top-left":
          top = wrapperRect.top - tooltipRect.height - 5
          left = wrapperRect.left - (tooltipRect.width) + 15
          break;
        case "top":
          top = wrapperRect.top - tooltipRect.height - 5
          left = wrapperRect.left+(wrapperRect.width/2)-(tooltipRect.width/2)
          break;
        case "right":
          top = wrapperRect.top + (wrapperRect.height/2) - (tooltipRect.height/2)
          left = wrapperRect.left + (wrapperRect.width) + 5
          break;
        case "bottom":
          top = wrapperRect.top + wrapperRect.height + 5
          left = wrapperRect.left + (wrapperRect.width/2) - (tooltipRect.width/2)
          break;
        case "bottom-right":
          top = wrapperRect.top + wrapperRect.height + 5
          left = wrapperRect.left + (wrapperRect.width) - 15
          break;
        case "bottom-left":
          top = wrapperRect.top + wrapperRect.height + 5
          left = wrapperRect.left - (tooltipRect.width) + 15
          break;
        case "left":
          top = wrapperRect.top + (wrapperRect.height/2) - (tooltipRect.height/2)
          left = wrapperRect.left - (tooltipRect.width) - 5
          break;
        default:
          top = wrapperRect.top - tooltipRect.height - 5
          left = wrapperRect.left+(wrapperRect.width/2)-(tooltipRect.width/2)
      }
      return {top:`${top}px`, left: `${left}px`}
    }

    function getTooltipHelperClass(placement){
      switch(placement){
        case "top-right":
          return "tooltip-top-right"
        case "top-left":
          return "tooltip-top-left"
        case "top":
          return "tooltip-top"
        case "right":
          return "tooltip-right"
        case "bottom":
          return "tooltip-bottom"
        case "bottom-right":
          return "tooltip-bottom-right"
        case "bottom-left":
          return "tooltip-bottom-left"
        case "left":
          return "tooltip-left"
        default:
          return "tooltip-top"
      }
    }

    function onMouseEnter(e){
      // measure
      setTooltipStyle(getTooltipPosition(getTooltipDimensions(tooltipWrapperId, tooltipId), placement))
      // position
      setTooltipHelperClass(getTooltipHelperClass(placement))
      setTooltipVisible(true)
    }
    function onMouseOut(e){
      setTooltipVisible(false)
    }
    function onTouchDown(e){}
    function onTouchUp(e){}



  return {tooltipWrapperId, tooltipId, tooltipVisible, onMouseEnter, onMouseOut, onTouchDown, onTouchUp, tooltipStyle, tooltipHelperClass};
};
export default useDTooltip;
